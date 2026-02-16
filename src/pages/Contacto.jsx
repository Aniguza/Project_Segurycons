import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material'
import { BannerSections } from '../components/BannerSections'
import heroImage from '../assets/BannerSection.jpeg'

const NARANJA = '#f0813e'
const BORDE_FORM = '#283655'
const BORDE_INPUT = '#ccc'
const LABEL_COLOR = '#22346C'
const PLACEHOLDER_COLOR = '#aaa'

const inputSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#fff',
    '& fieldset': { borderColor: BORDE_INPUT },
    '&:hover fieldset': { borderColor: '#999' },
    '&.Mui-focused fieldset': { borderColor: BORDE_FORM, borderWidth: '1px' },
  },
  '& .MuiInputBase-input::placeholder': { color: PLACEHOLDER_COLOR, opacity: 1 },
}

export const Contacto = () => {
  const [form, setForm] = useState({
    nombres: '',
    correo: '',
    celular: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const validate = () => {
    const newErrors = {}
    if (!form.nombres.trim()) newErrors.nombres = 'Ingresa tu nombre'
    if (!form.correo.trim()) newErrors.correo = 'Ingresa tu correo'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      newErrors.correo = 'Correo electrónico no válido'
    }
    if (!form.celular.trim()) newErrors.celular = 'Ingresa tu celular'
    else if (!/^\d{9}$/.test(form.celular)) newErrors.celular = 'Debe tener 9 dígitos'
    if (!form.mensaje.trim()) newErrors.mensaje = 'Escribe tu mensaje'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let nextValue = value
    if (name === 'celular') {
      const soloNumeros = value.replace(/\D/g, '').slice(0, 9)
      nextValue = soloNumeros
    }
    setForm((prev) => ({ ...prev, [name]: nextValue }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status) setStatus(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    // Simular envío; aquí conectarías con tu API o servicio de correo
    setTimeout(() => {
      setStatus('success')
      setForm({ nombres: '', correo: '', celular: '', mensaje: '' })
    }, 1200)
  }

  return (
    <Box sx={{ mt: { xs: '55px', md: '106px' } }}>
      <BannerSections serviceType="contacto" />

      {/* Contenido: texto + dos columnas */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 3 },
          py: { xs: 4, md: 5 },
        }}
      >
        <Typography
          sx={{
            color: 'primary.main',
            fontFamily: 'Century Gothic, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            mb: 4,
            textAlign: 'justify',
          }}
        >
          En SEGURYCONS estamos listos para asesorarte. Escríbenos y uno de nuestros especialistas se pondrá en contacto contigo para ayudarte en tu proyecto.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* Columna izquierda: imagen */}
          <Box
            sx={{
              borderRadius: 1,
              overflow: 'hidden',
              aspectRatio: { md: '4/5' },
              minHeight: { xs: 240, md: 400 },
            }}
          >
            <img
              src={heroImage}
              alt="Almacén SEGURYCONS"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Columna derecha: formulario */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 3.5,
              bgcolor: '#fff',
              border: '2px solid',
              borderColor: BORDE_FORM,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Box sx={{ mb: 2.5 }}>
              <Typography component="label" htmlFor="nombres" sx={{ display: 'block', color: LABEL_COLOR, mb: 1, fontSize: '1rem', fontWeight: 600  }}>
                Nombres
              </Typography>
              <TextField
                id="nombres"
                fullWidth
                name="nombres"
                placeholder="Value"
                value={form.nombres}
                onChange={handleChange}
                error={!!errors.nombres}
                helperText={errors.nombres}
                variant="outlined"
                size="medium"
                sx={inputSx}
              />
            </Box>
            <Box sx={{ mb: 2.5 }}>
              <Typography component="label" htmlFor="correo" sx={{ display: 'block', color: LABEL_COLOR, mb: 1, fontSize: '1rem', fontWeight: 600 }}>
                Correo electrónico
              </Typography>
              <TextField
                id="correo"
                fullWidth
                name="correo"
                type="email"
                placeholder="Value"
                value={form.correo}
                onChange={handleChange}
                error={!!errors.correo}
                helperText={errors.correo}
                variant="outlined"
                size="medium"
                sx={inputSx}
              />
            </Box>
            <Box sx={{ mb: 2.5 }}>
              <Typography component="label" htmlFor="celular" sx={{ display: 'block', color: LABEL_COLOR, mb: 1, fontSize: '1rem', fontWeight: 600 }}>
                Celular
              </Typography>
              <TextField
                id="celular"
                fullWidth
                name="celular"
                placeholder="Value"
                value={form.celular}
                onChange={handleChange}
                error={!!errors.celular}
                helperText={errors.celular}
                variant="outlined"
                size="medium"
                type="tel"
                inputProps={{ maxLength: 9, inputMode: 'numeric', pattern: '[0-9]*' }}
                sx={inputSx}
              />
            </Box>
            <Box sx={{ mb: 2.5 }}>
              <Typography component="label" htmlFor="mensaje" sx={{ display: 'block', color: LABEL_COLOR, mb: 1, fontSize: '1rem', fontWeight: 600 }}>
                Mensaje
              </Typography>
              <TextField
                id="mensaje"
                fullWidth
                name="mensaje"
                placeholder="Value"
                value={form.mensaje}
                onChange={handleChange}
                error={!!errors.mensaje}
                helperText={errors.mensaje}
                multiline
                minRows={4}
                variant="outlined"
                size="medium"
                sx={inputSx}
              />
            </Box>
            {status === 'success' && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Mensaje enviado. Te contactaremos pronto.
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }}>
                No se pudo enviar. Intenta de nuevo.
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={status === 'sending'}
              sx={{
                bgcolor: NARANJA,
                color: '#fff',
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 1.5,
                textTransform: 'uppercase',
                '&:hover': { bgcolor: '#e07a2e' },
              }}
            >
              {status === 'sending' ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Enviar'
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
