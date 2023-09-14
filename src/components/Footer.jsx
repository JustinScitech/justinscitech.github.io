import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/jlau04/" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/JustinScitech" className="mr-4 hover:underline md:mr-6">GitHub</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.youtube.com/@jlau04" className="hover:underline">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://www.youtube.com/@jlau04/videos" className="hover:underline">Made by Justin Lau</a></span>
                </div>
            </footer>


        )
    }
}
