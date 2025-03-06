import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const images = [
  {
    url: 'https://media.gettyimages.com/id/618322759/video/beating-heart.jpg?s=640x640&k=20&c=kKCvHrnaCD57TECkzThRiEU4uX00cMd421Xz6aNYOQc=',
    title: 'CARDIOLOGY',
    width: '30%',
    scrollId: 'cardiology-section',
    specialty: 'cardiology'
  },
  {
    url: 'https://e0.pxfuel.com/wallpapers/545/748/desktop-wallpaper-brain-artistic-hq-brain-2019-neurology.jpg',
    title: 'NEUROLOGY',
    width: '35%',
    scrollId: 'neurology-section',
    specialty: 'neurology'
  },
  {
    url: 'https://fyzicalchicago.com/wp-content/uploads/2021/04/knee-pain-banner-1-1067x800.jpg',
    title: 'ORTHOPEDICS',
    width: '35%',
    scrollId: 'orthopedics-section',
    specialty: 'orthopedics'
  },
];

// Dummy doctor data
const doctorsData = {
  cardiology: [
    { name: 'Dr. John Doe', experience: '15 years', languages: ['English', 'Spanish'], image: 'https://randomuser.me/api/portraits/men/1.jpg', details: 'Expert in heart surgeries and cardiovascular diseases.' },
    { name: 'Dr. Jane Smith', experience: '10 years', languages: ['English', 'French'], image: 'https://randomuser.me/api/portraits/women/1.jpg', details: 'Specialist in treating hypertension and heart failure.' }
  ],
  neurology: [
    { name: 'Dr. Mark Wilson', experience: '12 years', languages: ['English', 'German'], image: 'https://randomuser.me/api/portraits/men/2.jpg', details: 'Expert in brain and nervous system disorders.' }
  ],
  orthopedics: [
    { name: 'Dr. Susan Brown', experience: '20 years', languages: ['English'], image: 'https://randomuser.me/api/portraits/women/2.jpg', details: 'Specialist in knee replacements and sports injuries.' }
  ]
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': { opacity: 0.15 },
    '& .MuiImageMarked-root': { opacity: 0 },
    '& .MuiTypography-root': { border: '4px solid currentColor' },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

// Modal styling
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function Front() {
  const [open, setOpen] = React.useState(false);
  const [selectedDoctors, setSelectedDoctors] = React.useState([]);

  const handleOpen = (specialty) => {
    setSelectedDoctors(doctorsData[specialty] || []);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            onClick={() => handleOpen(image.specialty)}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>

      {/* Modal for Doctor Details */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Doctor Details</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {selectedDoctors.length === 0 ? (
            <Typography>No doctors available.</Typography>
          ) : (
            selectedDoctors.map((doctor, index) => (
              <Card key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2 }}>
                <Avatar src={doctor.image} sx={{ width: 60, height: 60, mr: 2 }} />
                <CardContent>
                  <Typography variant="body1"><strong>{doctor.name}</strong></Typography>
                  <Typography variant="body2">Experience: {doctor.experience}</Typography>
                  <Typography variant="body2">Languages: {doctor.languages.join(', ')}</Typography>
                  <Typography variant="body2">{doctor.details}</Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Modal>
    </>
  );
}
