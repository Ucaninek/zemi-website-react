import { v4 as uuidv4 } from 'uuid';
import Viewer from 'react-viewer';
import Tag from './tag.js';
import { useState } from 'react';
import ProgressiveImage from "react-progressive-image-loading";
import { Github } from "react-bootstrap-icons";

function ProjectCard({ title, desc, github, image, tags }) {
    var git = '';
    if (github !== undefined) {
        git = github;
    }
    const [visible, setVisible] = useState(false);
    return (
        <div className="project-container" key={uuidv4().toString()}>
            <div className="bg-gray-100 dark:bg-slate-800 px-6 pt-4 pb-6 rounded-md grow shrink">
                <h2 className="font-medium text-gray-700 dark:text-gray-200 text-xl mb-1">{(git === '') ? title : <div className="flex justify-between items-center">{title}<a href={github} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ease-in-out duration-200"><Github className="w-8 h-8 text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition ease-in-out duration-200" /></a></div>}</h2>
                <div className="tag-container">
                    {
                        tags.map(({ text, classes }) => (
                            <Tag key={uuidv4().toString()} text={text} classes={classes} />
                        ))
                    }
                </div>
                <div className="max-w-lg">
                    <ProgressiveImage
                        preview={image}
                        src={image}
                        alt={title}
                        transitionTime={500}
                        transitionFunction="ease"
                        render={(src, style) => <img src={src} alt={title} style={style} onClick={() => { setVisible(true) }} />}
                    />
                    <div>
                        <Viewer
                            visible={visible}
                            rotatable={false}
                            scalable={false}
                            changeable={false}
                            zoomable={false}
                            drag={false}
                            onClose={() => { setVisible(false); }}
                            images={[{ src: image, alt: title }]}
                        />
                    </div>
                </div>
                <p className="font-normal text-gray-500 dark:text-gray-300 text-md">{desc}</p>
            </div>
        </div >
    );
}

export default ProjectCard;