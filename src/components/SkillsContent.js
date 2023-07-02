import React from 'react';
import './SkillsContentStyles.css';
import { LinearProgress } from '@material-ui/core';

const SkillsContent = () => {
  return (
    <div className="skillContainer__text">
                    <h2>SKILLSET</h2>
                    <div className='skillContainer_skillset'>
                        <h4>HTML</h4>

                        <div className='skillContainer_slider' >
                            <LinearProgress variant='determinate' value={90} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>CSS</h4>

                        <div className='skillContainer_slider' >
                            <LinearProgress variant='determinate' value={90} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>JavaScript</h4>
                        <div className='skillContainer_slider' >
                            <LinearProgress variant='determinate' value={80} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>React</h4>

                        <div className='skillContainer_slider ' >
                            <LinearProgress variant='determinate' value={90} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>NodeJS</h4>

                        <div className='skillContainer_slider ' >
                            <LinearProgress variant='determinate' value={70} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>MongoDB</h4>

                        <div className='skillContainer_slider' >
                            <LinearProgress variant='determinate' value={80} />
                        </div>
                    </div>
                </div>
  )
}

export default SkillsContent