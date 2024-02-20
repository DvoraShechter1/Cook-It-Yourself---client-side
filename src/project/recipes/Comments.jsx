import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { CommentsList } from './CommentsList';
import { useSelector } from 'react-redux';
import { addCommentsToRecipe } from '../api';

export const Comments = (rId) => {
  const [open, setOpen] = useState(false);
  const user = useSelector(store => { return store.currentUser })
  rId = rId.rId
  const ref = useRef()
  const f_click = async () => {
    let val = ref.current.value
    if (val) {
      const c1 = {
        "recipeId": rId,
        "userId": user.id,
        "comment": val
      }
      addCommentsToRecipe(c1)
    }
    ref.current.value = ''
  }
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >לתגובות</Button>
      {open && <div style={{ minHeight: '150px', margin: 'auto', textAlign: 'center' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <CommentsList rId={rId}></CommentsList>
            {user && <div>
              <input ref={ref} placeholder="הכנס תגובה נוספת"></input>
              <br></br>
              {ref?.current?.value && <Button onClick={f_click} variant="outline-primary">הוספה</Button>}
            </div>}
          </div>
        </Collapse>
      </div>}
    </>
  );
}

