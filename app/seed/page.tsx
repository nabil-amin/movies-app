import { Button } from "@/components/ui/button";
import prisma from "../utils/dp";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.movie.createMany({
      data: [
        {
          id: 0,
          title: "Gran Turismo",
          age: 12,
          duration: 2.15,
          overview:
            "The true story of a team of unlikely underdogs -- a working-class gamer, a former race-car driver, and an idealistic motorsport executive -- who risk it all to take on the most elite sport in the world.",
          videoSource:
            "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
          imageString:
            "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
          release: 2023,
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
        },
        {
          imageString:
            "https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
          title: "A Haunting in Venice",
          age: 12,
          duration: 1.44,
          id: 1,
          overview:
            " Poirot reluctantly attends a seance at a decaying, haunted palazzo. He soons gets thrust into a sinister world of shadows and secrets when one of the guests is murdered.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/yEddsSwweyE",
        },
        {
          id: 2,
          title: "Five Nights at Freddy's",
          age: 16,
          duration: 1.5,
          overview:
            "A troubled security guard begins working at Freddy Fazbear's Pizzeria. While spending his first night on the job, he realizes the late shift at Freddy's won't be so easy to make it through.",
          release: 2023,
          videoSource: "",
          imageString:
            "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/0VH9WCFV6XQ",
        },

        {
          id: 3,
          title: "The Blacklist",
          age: 16,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg",
          overview:
            "Raymond Reddington is a notorious criminal who is wanted by law enforcements agents. He agrees to help the police catch other criminals on the condition he gets to work with a new agent, Elizabeth.",
          release: 2013,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=JGBIimq1I3A",
        },
        {
          id: 4,
          title: "Suits",
          age: 12,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
          overview:
            "A college dropout, Mike Ross, possesses immense competence. A set of circumstances leads to him effectively working as a law associate for Harvey Specter despite not having gone to law school.",
          release: 2011,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/85z53bAebsI",
        },
        {
          id: 5,
          title: "Chernobyl",
          age: 16,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
          overview:
            "After reuniting with a lost love, firefighter Alexey retires to begin a new life -- but the Chernobyl disaster suddenly plunges him back into danger.",
          release: 2019,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/s9APLXM9Ei8",
        },
        {
          id: 6,
          title: "Retribution",
          age: 12,
          duration: 1.31,
          imageString:
            "https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
          overview:
            "While driving with his two kids, a man receives a phone call from an unknown assailant who claims there is a bomb in the car. Unable to exit the vehicle, he must now follow a series of twisted instructions while trying to figure out how to survive.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/jzQn0-WH4WM",
        },
        {
          id: 7,
          title: "Spider-Man: Across the Spider-Verse",
          age: 12,
          duration: 2.2,
          imageString:
            "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
          overview:
            "In an attempt to curb the Spot, a scientist, from harnessing the power of the multiverse, Miles Morales joins forces with Gwen Stacy.",
          release: 2023,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
        },

        {
          id: 8,
          title: "Coco",
          release: 2017,
          age: 0,
          duration: 1.45,
          imageString:
            "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
          overview:
            "Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history.",
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
        },
        {
          id: 9,
          title: "Monk",
          release: 2002,
          age: 12,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",
          overview:
            "After a detective is unable to solve his wife's murder case, he suffers from obsessive compulsive disorder. Despite getting sacked from his job, he continues to solve cases with his former boss.",
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
        },
        {
          id: 10,
          title: "Family Guy",
          age: 16,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",
          overview:
            "Peter Griffin tries to do the right thing for his assorted family of two teenagers, a smart dog and a devilish baby. Despite his good intentions, Peter ends up making hilarious mistakes all the time.",
          release: 1999,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
        },
      ],
    });
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
