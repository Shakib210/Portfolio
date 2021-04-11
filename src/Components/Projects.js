import React,{useState, useEffect} from 'react'
import firebase from '../firebase'
import { Row,Col, Container} from 'react-bootstrap'
import '../App.css'
import ProjectsCard from './ProjectsCard';
const db=firebase.firestore();


const Project=(props)=> {
    const [projects, setprojects] = useState([])
    

    useEffect(() => {
        const fetchUsers = async () => {
          const usersCollection = await db.collection("projects").get();
          setprojects(
            usersCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchUsers();
      }, []);

      

    return (
      <>
        <Container>
        <h3 className="d-flex justify-content-center mt-3"><strong>Projects</strong></h3>
        <div ref={props.refe} className="my-3 d-flex justify-content-center mb-5">
            <Row>
            {projects.map((project) => (
              <Col key={project._id} sm={12} md={4} lg={4} xl={3} className="mx-4 mt-4 shadow-box-example hoverable" >
                <ProjectsCard project={project} />
              </Col>
            ))}
          </Row>   
        
        </div>
        </Container>
        
       
      </>
    )
}

export default Project;


