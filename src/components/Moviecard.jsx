import React from 'react'

const Moviecard = ({title, image, description, release_date, rating}) => {

  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        ></img>
        <div class="flex flex-col justify-between p-4">
          <div className="h-48 p-4 overflow-hidden webkit-box-orient: vertical webkit-line-clamp: 6 text-ellipsis mb-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 webkit-line-clamp: 5 webkit-box-orient: vertical overflow-hidden text-ellipsis">
              {description}
            </p>
          </div>
          <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-row gap-4 justify-between">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
             📅 {release_date}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
             ⭐ {rating}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Moviecard
