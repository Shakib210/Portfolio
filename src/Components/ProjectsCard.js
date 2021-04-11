import React from 'react'
import { Card,Button} from 'react-bootstrap'
import '../App.css'

const ProjectsCard = ({project}) => {
    return (
        <div>
             <Card  className="mb-4 row_poster" style={{width:'320px'}} >
                   <Card.Img style={{ width: '310px',padding:'5px' ,height:'250px' }} variant="top" src={project.pic} />
                <Card.Body>
                   <Card.Title>{project.title}</Card.Title>
                   <Card.Text>
                     {project.description}
                   </Card.Text>
                </Card.Body>
                <Card.Body >
                    
                    <Button  href={project.webLink}>Website </Button>
                    <Button className="ml-3" href={project.gitLink}>Github</Button>

                </Card.Body>
                </Card>
        </div>
    )
}

export default ProjectsCard
