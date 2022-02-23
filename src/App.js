import React from 'react' 
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import CaesarCipher from './routes/CaesarCipher';
import ShiftCipher from './routes/ShiftCipher';
import AffineCipher from './routes/AffineCipher';
import NotFound from './routes/NotFound';
import Navigation from './components/Navigation';

function App() {
  return (
    <Container maxW='container.xl'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/caesar-cipher' element={<CaesarCipher />} />
        <Route path='/shift-cipher' element={<ShiftCipher />} />
        <Route path='/affine-cipher' element={<AffineCipher />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;