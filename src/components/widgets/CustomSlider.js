import React from 'react'
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'

function CustomSlider({ KEY, setKEY, isDisabled }) {
    return (
        <Slider flex='1' isDisabled={isDisabled} onChange={(e) => setKEY(e)} focusThumbOnChange={false} value={KEY} min={0} max={29} >
            <SliderTrack>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='orange.400' />
            </SliderTrack>
            <SliderThumb fontSize='sm' boxSize='32px' children={KEY} />
        </Slider>
    )
}

export default CustomSlider