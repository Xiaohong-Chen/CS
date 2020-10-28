import ModuleListComponent from "../components/ModuleListComponent";
import {connect} from "react-redux";
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";


const stateToPropsMapper = (state) => {
   return (
       {
          modules: state.moduleReducer.modules,
          course: state.courseReducer.course
       }
   )
}

const dispatchToPropsMapper = (dispatch) =>{
   return (
       {
           createModuleForCourse: (course) => ModuleService.createModuleForCourse(course._id,{title:"New Module@"})
              .then(actualModule => dispatch({type:"CREATE_MODULE_FOR_COURSE", module:actualModule})),

           editModule: (module) => dispatch({type:"EDIT_MODULE",module}),

           deleteModule: (module) => ModuleService.deleteModule(module._id)
               .then(status => dispatch({type:"DELETE_MODULE", module})),

           updateModule: (module) => ModuleService.updateModule(module._id, module)
               .then(status => dispatch({type:"EDIT_MODULE", module}))
       }
   )
}

export default connect(stateToPropsMapper,dispatchToPropsMapper)(ModuleListComponent)