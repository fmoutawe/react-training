import {useState} from "react";
import {Button} from "../../components/Button/Button";
import {Container} from "../../components/Container/Container";
import {Section} from "../../components/Section/Section";
import {useRandomUnder05Hook} from "../../hooks/useRandomUnder05Hook";

const AlertButton = () => {
  const onClickHandler = () => alert('This is an alert');

  return <Button onClickHandler={onClickHandler}>
    Fire an alert
  </Button>
};

const WithoutStateButton = () => {
  let count = 0;
  const onClickHandler = () => {
    count += 1;
  };

  console.log("Button component rendering: ", count);

  return <>
    <Button onClickHandler={onClickHandler}>
      Ajoute 1
    </Button>
    <p>Vous avez cliqué {count} fois sur le bouton.</p>
  </>
}

const WithStateButton = () => {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
  };

  console.log("Button component rendering: ", count);

  return <>
    <Button onClickHandler={onClickHandler}>
      Ajoute 1
    </Button>
    <p>Vous avez cliqué {count} fois sur le bouton.</p>
  </>
}

export const HomePage = () => {

  useRandomUnder05Hook();

  return <Container>
    <h1>HomePage</h1>

    <Section title="Button firing alert">
      <AlertButton/>
    </Section>
    <Section title="Button without state">
      <WithoutStateButton />
    </Section>
    <Section title="Button with state">
      <WithStateButton />
    </Section>
  </Container>
}