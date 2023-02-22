import { Select, Button, Group, Container, Text, Code } from "@mantine/core";
import "./App.css";
export default function MyForm() {
  return (
    <Container className='center'>
      <h1>Hover me</h1>
      <Button className='buttone' p={4}>
        <svg className='icon' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.25 19V12.75H5V11.25H11.25V5H12.75V11.25H19V12.75H12.75V19H11.25Z' fill='#444746' />
        </svg>
        <Text px={3}>New Team</Text>
      </Button>

      <h2>CSS</h2>
      <span>
        <Code block>
          {`.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15em;
  flex-direction: column;
}


.buttone {
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  overflow:hidden;
  width: auto;
  max-width: 33px; 
  -webkit-transition: max-width 0.5s;
  -webkit-transition: padding-right 0.5s;
  transition: max-width 0.5s;
}

.buttone:hover {
  max-width: 300px; /* fit content doesnt work */
}

.text {
  white-space: nowrap;
  padding-right: 15px;
}`}
        </Code>
      </span>
    </Container>
  );
}
