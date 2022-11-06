import { prisma } from "~/db.server";

type Restaurant = {
    id: string;
    name: string;
    score: number;
};

export async function getRestaurants(): Promise<Array<Restaurant>> {
    return prisma.restaurant.findMany();
}