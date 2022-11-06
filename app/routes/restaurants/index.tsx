import { Heading, Link, ListItem, OrderedList } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getRestaurants } from "~/models/restaurant.server";

type LoaderData = {
    // this is a handy way to say: "posts is whatever type getPosts resolves to"
    restaurants: Awaited<ReturnType<typeof getRestaurants>>;
};

export const loader = async () => {
    return json<LoaderData>({
        restaurants: await getRestaurants(),
    });
};

export default function Restaurants() {
    const { restaurants } = useLoaderData();
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