import { Heading, Link, List, ListIcon, ListItem, VStack } from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from "react-icons/md";


export default function Index() {
  return (
    <VStack bg='teal.300'>
      <Heading>Welcome to Remix</Heading>
      <List>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          <Link href="/restaurants">
            local places
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
    </VStack>
  );
}
