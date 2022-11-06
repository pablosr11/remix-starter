import { Heading, Link, ListItem, OrderedList } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getRestaurants } from "~/models/restaurant.server";

export async function loader({ request }: LoaderArgs) {
    const restaurants = await getRestaurants()
    return json({ restaurants })
}


export default function Restaurants() {
    const { restaurants } = useLoaderData<typeof loader>()
    console.log(restaurants)
    return (
        <VStack>
            <Heading>Resturants</Heading>
            <br />
            <OrderedList>
                {restaurants.map((r) => (
                    <ListItem key={r.id}>
                        <Link href='#' color="teal.200">
                            {r.name}
                        </Link>
                    </ListItem>
                ))}
            </OrderedList>
        </VStack>
    );
}