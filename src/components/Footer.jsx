import React, { Component } from 'react'
import justin from '../assets/justin.jpg';

export default class Footer extends Component {
    render() {
        return (
            <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://jlau.tech" class="flex items-center mb-4 sm:mb-0">
                            <span class="self-center text-2xl font-light whitespace-nowrap dark:text-white">Jlau</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/jlau04/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/JustinScitech" class="mr-4 hover:underline md:mr-6">GitHub</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.youtube.com/@jlau04" class="hover:underline">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://www.youtube.com/@jlau04/videos" class="hover:underline">Made by Justin Lau</a></span>
                </div>
            </footer>


        )
    }
}
