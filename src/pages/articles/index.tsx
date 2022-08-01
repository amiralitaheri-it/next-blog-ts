import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {GetServerSideProps} from "next";

import PropTypes from "prop-types";

import {getArticlesFromService} from "@/services/article-service";

function Index({articles}) {

    return (
        <div className='p-8 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-10 mt-5'>
            {
                articles?.map(article => <div key={article?.id}>
                    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Link href={`/articles/${article?.id}`}>
                            <a>
                                <Image className='rounded-md' src={article?.image} blurDataURL={article?.dataUri} alt={article?.title} width='640'
                                       height='480' placeholder='blur'/>
                            </a>
                        </Link>
                        <div className="p-5">
                            <Link href={`/articles/${article?.id}`}>
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article?.title}</h5>
                                </a>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${article?.description.substring(0, 100)}...`}</p>
                            <Link href={`/articles/${article?.id}`}>
                                <a
                                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

Index.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default React.memo(Index);

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        let articles = await getArticlesFromService();

        return {
            props: {
                articles
            }
        }
    } catch (error) {
        console.log(error)
    }
}