import { DragEvent, FC, useContext } from 'react';
import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { UIContext } from '@/context';

interface Props {
  entry: Entry
}

export const EntryCard:FC<Props> = ({ entry }) => {

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id)

    startDragging()
  }

  const onDragEnd = () => {
    endDragging()
  }
  const { endDragging, startDragging } = useContext(UIContext)

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={ onDragStart }
      onDrop={ onDragEnd }
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex',  justifyContent:'end', paddingRight: '2'}}>
          <Typography variant='body2'>Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
