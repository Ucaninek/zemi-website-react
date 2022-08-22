import { LazyLoadImage } from 'react-lazy-load-image-component';
import { v4 as uuidv4 } from 'uuid';
import Tag from './tag.js';
function techCard({ name, desc, usingFor, tags, image }) {
    return (
        <div className="tech-container" key={uuidv4().toString()}>
            <div className="bg-gray-100 dark:bg-slate-800 p-5 rounded-md">
                <div className="flex items-center h-full justify-between gap-5">
                    <div className="rounded-md overflow-hidden items-center">
                        <LazyLoadImage src={image} alt={name} width={256} />
                    </div>
                    <div>
                        <div className="tag-container">
                            <span className="font-medium text-gray-700 dark:text-gray-200 text-2xl">{name}</span>
                            {
                                tags.map(({ text, classes }) => (
                                    <Tag key={uuidv4().toString()} text={text} classes={classes} />
                                ))
                            }
                        </div>
                        <span className="text-amber-400 text-xl font-semibold">{usingFor}</span>
                        <p className="font-normal text-gray-500 dark:text-gray-400 text-md">{desc}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default techCard;