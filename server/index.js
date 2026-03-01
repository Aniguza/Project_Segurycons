import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT ?? 3001

// Correo donde recibes los mensajes del formulario (variable en .env)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.BREVO_SENDER_EMAIL
const BREVO_API_KEY = process.env.BREVO_API_KEY

app.use(cors({ origin: true }))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  if (!BREVO_API_KEY) {
    return res.status(500).json({ error: 'BREVO_API_KEY no configurada' })
  }
  if (!CONTACT_EMAIL) {
    return res.status(500).json({ error: 'CONTACT_EMAIL no configurada en .env' })
  }

  const { nombres, correo, celular, mensaje } = req.body || {}
  if (!nombres?.trim() || !correo?.trim() || !mensaje?.trim()) {
    return res.status(400).json({ error: 'Faltan nombres, correo o mensaje' })
  }

  const htmlContent = `
    <h2>Nuevo mensaje desde Contacto - SEGURYCONS</h2>
    <p><strong>Nombres:</strong> ${escapeHtml(nombres)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
    <p><strong>Celular:</strong> ${escapeHtml(celular || '—')}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
  `

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Web SEGURYCONS',
          email: CONTACT_EMAIL,
        },
        to: [{ email: CONTACT_EMAIL, name: 'SEGURYCONS' }],
        subject: `Contacto web: ${nombres.trim().slice(0, 50)}`,
        htmlContent,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Brevo error:', response.status, errText)
      return res.status(502).json({ error: 'Error al enviar el correo' })
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando email:', err)
    res.status(500).json({ error: 'Error de servidor' })
  }
})

function escapeHtml(text) {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.listen(PORT, () => {
  console.log(`Servidor API en http://localhost:${PORT}`)
})
