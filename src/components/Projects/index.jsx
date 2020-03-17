import React from 'react';

import Sidehug from '../Sidehug'

import dadsajokeThumb from '../../resources/project-thumbnails/dadsajoke-thumbnail.png';
import snakejsThumb from '../../resources/project-thumbnails/snakejs-thumbnail.png';

import projectsContent from './projects.content.json';
import './projects.scss';
export default class ProjectCollection extends React.Component {

	render() {
		const { projects } = projectsContent;
		return(
			<section className="projects-page">
				<h2>Projects</h2>
				{projects.map((project, index) => (
					<Sidehug
					className={project.className}
					imgSrc={project.imgSrc}
					header={project.header}
					content={project.content}
					order={(index%2 == 0) ? [1,2] : [2,1]}
					key={index}
				/>
				))}
			</section>
		);
	}
}