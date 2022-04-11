import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Boards from './Boards'

const boardsList = [
  {
    id: 'studiboard',
    boardName: 'Studiboardxd'
  },
  {
    id: 'qwert',
    boardName: 'QWERTIboardxd'
  }
]

const Content = () => {
  const [boardOrder, updateBoardOrder] = useState(boardsList)

  function handleOnDragEnd(result) {
    const items = Array.from(boardOrder)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updateBoardOrder(items)
  }
  return (
          <div className="pl-40">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='items'>
                {(provided) => (
                  <ul className='items' {...provided.droppableProps} ref={provided.innerRef}>
                  {boardOrder.map(({id, boardName}, index) => {
                    return(
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                            <Boards provided={provided} name={boardName} id={id} />  
                          </li>
                        )}
                      </Draggable>
                    )
                  } )}
                </ul>
                )}
              </Droppable>
              
            </DragDropContext>
            
               

          </div>
    
  )
}

export default Content