import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <h1>
        <b>Home page</b>
      </h1>
      <p>This is some placeholder text.</p>

      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Tailwind section
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          commodi repellendus.{" "}
          <a
            href="#"
            class="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            Read more
          </a>{" "}
          aliquam illo ut temporibus voluptatum totam iste vitae doloremque
          ipsum officiis, autem dolore earum praesentium? Quae voluptatum maxime
          at?
        </p>
      </section>

      <section
        class="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24 
      md:px-14 
      px-12 
      ml-0 mr-0 

      md:gap-6 
      lg-gap-12 
      "
      >
        <Card
          className="max-w-sm mx-auto"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
        <Card
          className="max-w-sm mx-auto"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
        <Card
          className="max-w-sm mx-auto"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
      </section>
    </>
  );
};

export default Home;
