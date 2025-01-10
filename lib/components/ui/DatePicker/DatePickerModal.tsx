import { FC } from 'react'
import Card from '../Card/Card'
import Box from '../Box/Box'
import TextInput from '../TextInput/TextInput'
import { P } from '../Text/Text'
import { Button } from 'preact-ui'

const DatePickerModal: FC = () => {
    return <Card>
        <Box orientation='row' className='UI_DatePicker__ModalContent'>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <P className='UI_DatePicker__ModalText'>/</P>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <P className='UI_DatePicker__ModalText'>/</P>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
            <TextInput type='text' className='UI_DatePicker__ModalInput'/>
        </Box>
        <Button>Select</Button>
    </Card>
}

export default DatePickerModal