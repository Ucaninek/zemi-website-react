import { v4 as uuidv4 } from 'uuid';
import ProgressiveImage from "react-progressive-image-loading";
import Tag from './tag.js';

function techCard({ name, desc, usingFor, tags, image }) {
    return (
        <div className="tech-container">
            <div className="bg-gray-100 dark:bg-slate-800 p-5 rounded-md">
                <div className="flex items-center h-full justify-between gap-5">
                    <div className="rounded-md overflow-hidden items-center">
                        <ProgressiveImage
                            width={256}
                            preview={image}
                            src={image}
                            alt={name}
                            transitionTime={500}
                            transitionFunction="ease"
                            render={(src, style) => <img src={src} alt={name} width={256} style={style} />} />

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
                        <p className="font-normal text-gray-800 dark:text-gray-300 text-md">{desc}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default techCard;