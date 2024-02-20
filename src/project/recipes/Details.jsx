import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardDetails from './CardDetails';

function Details(r) {
  const [smShow, setSmShow] = useState(false);

  r = r.r

  return (
    <>
      <div style={{ "text-align": "center" }}>
        <Button onClick={() => setSmShow(true)} className="me-2">
          לפרטים נוספים
        </Button>
        <Modal
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {r.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardDetails recipe={r}></CardDetails>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Details;
