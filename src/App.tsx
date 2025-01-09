import { Button, Card, Checkbox, H1, H2, H3, P, Small, Switch, TextArea, TextInput } from "preact-ui";

function App() {

  return (
    <div>
      <Card spacing="large">
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
        <Button variant="danger" fit>Danger</Button>
        <TextInput type="email" placeholder="johndoe@gmail.com"/>
        <TextArea placeholder="Text area"  rows={3}/>
        <TextArea placeholder="Unresizable text area" unresizable rows={3}/>
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
        </Card>
    </div>
  )
}

export default App
