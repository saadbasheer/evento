import notFound from "@/app/not-found";
import prisma from "./db";
import { capitalize } from "./utils";

export async function getEvents(city: string, page = 1) {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
  
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });
  
    let totalCount;
    if (city === "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: capitalize(city),
        },
      });
    }
  
    return { events, totalCount };
  }
  
  export async function getEvent(slug: string) {
    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug: slug,
      },
    });
    if (!event) {
      return notFound();
    }
    return event;
  }
  