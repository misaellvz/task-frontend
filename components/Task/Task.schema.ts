import * as Yup from 'yup';
const TaskSchema = Yup.object().shape({
  description: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  completed: Yup.boolean()
});
export default TaskSchema;
