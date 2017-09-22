import { Page, Code, Section, Stage, Scene, Narrative } from '../components.jsx'
import UXComment from '../UXComment.jsx'

import Alert from '../../../lib/Alert.jsx'

export default function BasicPage (props) {
  return (
    <Page>

      <Section title="Alerts">
        <Narrative>
          <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
          <UXComment>
            <h2>Konsten att välja en alert-box är en konst. Du ska tänka på en massa olika saker.</h2>
            <p>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</p>
          </UXComment>
          <UXComment>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</UXComment>
          <UXComment>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</UXComment>
        </Narrative>
        <Stage>
          <h3>Standard alert box</h3>
          <Scene>
            <Alert color="success">
              <p>Some cool text in a <b>success</b> alert box!</p>
            </Alert>
            <UXComment>Du ska tänka på en massa olika saker <a href="www.kth.se">läs mer...</a></UXComment>
            <UXComment>
              <h2>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</h2>
              <p>Konsten att välja en alert-box. Du ska tänka på en massa olika saker.</p>
            </UXComment>
            <Alert color="warning">
              <p>Some cool text in a <b>warning</b> alert box!</p>
            </Alert>
            <Alert color="danger">
              <p>Some cool text in a <b>danger</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert color="success">
  <p>Some cool text in a <b>success</b> alert box!</p>
  </Alert>
  <Alert color="warning">
  <p>Some cool text in a <b>warning</b> alert box!</p>
  </Alert>
  <Alert color="danger">
  <p>Some cool text in a <b>danger</b> alert box!</p>
</Alert>`}
            </Code>
          </Scene>

          <h3>Alert box with close button</h3>
          <Scene>
            <Alert onClose={() => {}}>
              <p>Some cool text in a <b>success</b> alert box!</p>
            </Alert>
            <Code>
{`<Alert onClose={() => {}}>
  <p>Some cool text in a <b>danger</b> alert box!</p>
</Alert>`}
            </Code>  
          </Scene>
          <h3>Alert box with header</h3>
          <Scene>
            <Alert onClose={() => {}}>
              <span>
                <h4>Attention!</h4>
                <p>Some cool text in a <b>success</b> alert box!</p>
              </span>
            </Alert>
            <Code>
{`<Alert onClose={() => {}}>
  <span>
    <h4>Attention!</h4>
    <p>Some cool text in a <b>danger</b> alert box!</p>
  </span>
</Alert>`}
            </Code>  
          </Scene>
        </Stage>
      </Section>

    </Page>
  )
}