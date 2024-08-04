import React from 'react';
import { Modal, Box, Typography, Grid, IconButton } from '@mui/material';
import { AccessTime, Power, FitnessCenter, Speed, Shield } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import './WinnerModal.css';

const getAttributeIcon = (attribute) => {
  switch (attribute) {
    case 'intelligence':
      return <AccessTime className="attribute-icon" />;
    case 'strength':
      return <FitnessCenter className="attribute-icon" />;
    case 'speed':
      return <Speed className="attribute-icon" />;
    case 'durability':
      return <Shield className="attribute-icon" />;
    case 'power':
      return <Power className="attribute-icon" />;
    case 'combat':
      return <AccessTime className="attribute-icon" />;
    default:
      return null;
  }
};

const translateAttribute = (attribute) => {
  switch (attribute) {
    case 'intelligence':
      return 'Inteligência';
    case 'strength':
      return 'Força';
    case 'speed':
      return 'Velocidade';
    case 'durability':
      return 'Durabilidade';
    case 'power':
      return 'Poder';
    case 'combat':
      return 'Combate';
    default:
      return attribute;
  }
};

const HeroDetails = ({ hero }) => (
  <Box className="hero-details">
    <img 
      src={hero.images.lg} 
      alt={hero.name} 
      className="winner-hero-image"
    />
    <Typography variant="subtitle1" className="hero-name">
      {hero.name}
    </Typography>
    <Box className="hero-attributes">
      {Object.entries(hero.powerstats).map(([key, value]) => (
        <Box key={key} className="attribute">
          {getAttributeIcon(key)}
          <Typography className="attribute-value">
            {`${translateAttribute(key)}: ${value}`}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const WinnerModal = ({ open, onClose, selectedHeroes }) => {
  if (selectedHeroes.length < 2) {
    return (
      <Modal open={open} onClose={onClose}>
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 600, 
            bgcolor: '#f0f0f0', 
            boxShadow: 24, 
            p: 4,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <IconButton 
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'text.primary',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" className="battle-result-title">
            Resultado da Batalha
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Selecione dois heróis para comparar.
          </Typography>
        </Box>
      </Modal>
    );
  }

  const [hero1, hero2] = selectedHeroes;
  const hero1TotalPower = Object.values(hero1.powerstats).reduce((a, b) => a + b, 0);
  const hero2TotalPower = Object.values(hero2.powerstats).reduce((a, b) => a + b, 0);
  const winner = hero1TotalPower > hero2TotalPower ? hero1 : hero2;

  return (
    <Modal open={open} onClose={onClose}>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 900, // Aumenta a largura do modal
          bgcolor: '#f0f0f0', 
          boxShadow: 24, 
          p: 4,
          textAlign: 'center',
          position: 'relative'
        }}
        className="modal-content"
      >
        <IconButton 
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'text.primary',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" className="battle-result-title">
          Resultado da Batalha
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }} className="winner-info">
          <Grid item xs={6}>
            <HeroDetails hero={hero1} />
          </Grid>
          <Grid item xs={6}>
            <HeroDetails hero={hero2} />
          </Grid>
        </Grid>
        <Typography variant="h6" className="winner-title">
          Vencedor: {winner.name}
        </Typography>
      </Box>
    </Modal>
  );
};

export default WinnerModal;
