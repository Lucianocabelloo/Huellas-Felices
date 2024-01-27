import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

const VetCard = ({ veterinary }) => {

  console.log(veterinary)
  console.log(veterinary.nombre)
    return (
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            overflow: { xs: 'auto', sm: 'initial' },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              display: 'block',
              width: '1px',
              bgcolor: 'warning.300',
              left: '500px',
              top: '-24px',
              bottom: '-24px',
              '&::before': {
                top: '4px',
                content: '""',
                display: 'block',
                position: 'absolute',
                right: '0.5rem',
                color: 'text.tertiary',
                fontSize: 'sm',
                fontWeight: 'lg',
              },
              '&::after': {
                top: '4px',
                content: '""',
                display: 'block',
                position: 'absolute',
                left: '0.5rem',
                color: 'text.tertiary',
                fontSize: 'sm',
                fontWeight: 'lg',
              },
            }}
          />
          <Card
            orientation="horizontal"
            sx={{
              width: '100%',
              flexWrap: 'wrap',
              [`& > *`]: {
                '--stack-point': '500px',
                minWidth:
                  'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
              },
              overflow: 'auto',
              resize: 'horizontal',
            }}
          >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
              <img
          src={veterinary.imagen}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
          {veterinary.nombre} {veterinary.apellido}
        </Typography>
        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
          Veterinario ({veterinary.especialidad})
        </Typography>
              <Sheet
                sx={{
                  bgcolor: 'background.level1',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 },
                }}
              >
               <div>
            <Typography level="body-xs" fontWeight="lg">
              Turnos Libres
            </Typography>
            <Typography fontWeight="lg">{veterinary.turnosLibres}</Typography>
          </div>
          <div>
            <Typography level="body-xs" fontWeight="lg">
              Turnos Agendados
            </Typography>
            <Typography fontWeight="lg">{veterinary.turnosAgendados}</Typography>
          </div>
          <div>
            <Typography level="body-xs" fontWeight="lg">
              Consultas Realizadas
            </Typography>
            <Typography fontWeight="lg">{veterinary.consultas}</Typography>
          </div>
              </Sheet>
              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant="solid" color="danger">
                  Eliminar
                </Button>
                <Button variant="solid" color="warning">
                  Editar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
  )
}

export default VetCard