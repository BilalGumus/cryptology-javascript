import React from 'react' 
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import CaesarCipher from './routes/CaesarCipher';
import ShiftCipher from './routes/ShiftCipher';
import AffineCipher from './routes/AffineCipher';
import NotFound from './routes/NotFound';
import Navigation from './components/Navigation';
import MixedAlphabetCipher from './routes/MixedAlphabetCipher';
import PermutationCipher from './routes/PermutationCipher';
import RouteCipher from './routes/RouteCipher';

function App() {
  return (
    <Container maxW='container.xl'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/caesar-cipher' element={<CaesarCipher />} />
        <Route path='/shift-cipher' element={<ShiftCipher />} />
        <Route path='/affine-cipher' element={<AffineCipher />} />
        <Route path='/mixed-alphabet-cipher' element={<MixedAlphabetCipher />} />
        <Route path='/permutation-cipher' element={<PermutationCipher />} />
        <Route path='/route-cipher' element={<RouteCipher />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;