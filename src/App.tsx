import { Box, Button, Calendar, Card, Checkbox, DatePicker, H1, H2, H3, Modal, P, Small, Switch, TextArea, TextInput, ToastContainer, useToast } from "preact-ui";
import { useState } from "react";

function App() {

  const [modal, setModal] = useState(false);
  const addToast = useToast();

  return (
    <>
      <Box>
        <H1>Title</H1>
        <H2>Sub title</H2>
        <H3>Third title</H3>
        <P size="large">Large paragraph</P>
        <P size="regular">Regular paragraph</P>
        <P size="small">Small paragraph</P>
        <Small>Small text</Small>
        <Button variant="shadow" fit>Shadow</Button>
        <Button fit>Primary</Button>
        <Button variant="success" fit>Success</Button>
        <Button variant="warning" fit>Warning</Button>
        <Button variant="error" fit>Danger</Button>
        <TextInput type="email" placeholder="johndoe@gmail.com"/>
        <TextArea placeholder="Text area"  rows={3}/>
        <TextArea placeholder="Unresizable text area" unresizable rows={3}/>
        <DatePicker/>
        <Switch/>
        <Checkbox/>
        <Card container="article" spacing="large" fit>
          <P size="small">Large card</P>
        </Card>
        <Card container="article" spacing="medium" fit>
          <P size="small">Medium card</P>
        </Card>
        <Card container="article" spacing="small" fit>
          <P size="small" fit>Small card</P>
        </Card>
        <Button onClick={() => setModal(true)}>Open Modal</Button>
        <Modal open={modal} onClose={() => setModal(false)}>
          <Card>
            <P size="small" fit>A modal</P>
          </Card>
        </Modal>
        <Calendar/>
        <Button
          onClick={() => addToast({ message: "Info toast !", content: "This is an info toast !", type: "infos" })}
        >Info Toast</Button>
        <Button
          variant="success"
          onClick={() => addToast({ message: "Success toast !", content: "This is a success toast !", type: "success" })}
        >Success Toast</Button>
        <Button
          variant="warning"
          onClick={() => addToast({ message: "Warning toast !", content: "This is a warning toast !", type: "warning" })}
        >Success Toast</Button>
        <Button
          variant="error"
          onClick={() => addToast({ message: "Error toast !", content: "This is an error toast !", type: "error" })}
        >Error Toast</Button>
      </Box>
      <ToastContainer/>
    </>
  )
}

export default App
