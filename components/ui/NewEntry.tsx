import { ChangeEvent, useContext, useState } from 'react'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import { EntriesContext } from '@/context/entries'


export const NewEntry = () => {

  const { addNewEntry } = useContext(EntriesContext)
  const [isAdding, setIsAdding] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue( event.target.value )
  }

  const onSave = () => {
    if(inputValue.length === 0) return;

    addNewEntry(inputValue)
    setIsAdding(false)
    setTouched(false)
    setInputValue('')
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>

      {
        isAdding ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1}}
              placeholder='Nueva entrada'
              autoFocus
              multiline
              label='Nueva entrada'
              helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
              error={ inputValue.length <= 0 && touched }
              onChange={ onTextFieldChange }
              onBlur={() => setTouched(true)}
            />
            <Box display='flex' justifyContent='space-between'>
              <Button
              variant='outlined'
              color='error'
              onClick={() => setIsAdding(false)}
              >
                Cancelar
              </Button>
              <Button
              variant='outlined'
              color='secondary'
              onClick={ onSave }
              >
                Guardar
              </Button>
            </Box>
          </>
        ) : (
          <Button 
            startIcon={ <AddCircleOutlineOutlined /> }
            fullWidth
            variant='outlined'
            onClick={() => setIsAdding(true)}
          >
            Agregar Tarea
          </Button>
        )
      }

    </Box>
  )
}
