import {FC } from 'react';
import styled from '@emotion/styled';
import Chat from '../components/Chat';
import Feather from 'feather-icons-react'
const Home: FC = () => (
  <>
    <section>
	<div className="dark:dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:dark:bg-gray-800 dark:dark:text-gray-50">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:dark:border-gray-700 dark:dark:text-gray-900">Learn more</button>
			</div>
		</div>
	</div>
	<img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:dark:bg-gray-500" />
</section>
<section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
		<p className="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
			<button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
			<button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Learn more</button>
		</div>
	</div>
</section>
</>
  );

  export default Home;