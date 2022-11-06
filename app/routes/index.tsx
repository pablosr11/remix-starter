import { Link, List, ListIcon, ListItem, Heading } from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from "react-icons/md";

export default function Index() {
  return (
    <div>
      <Heading>Welcome to Remix</Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          <Link
            href="https://remix.run/tutorials/jokes" color='teal.500'
          >
            Deep Dive Jokes App Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          <Link target="_blank" href="https://remix.run/docs">
            Remix Docs
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          <Link target="_blank" href="https://marca.com">
            Marca
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdSettings} color='green.500' />
          <Link target="_blank" href="https://old.reddit.com">
            old reddit
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
