import type { TaskFragment as Task, UpdateTaskDto } from '@graphql/graphql';
import { useFormik } from 'formik';
import AddButton from 'mui/AddButton';
import CenteredBox from 'mui/CenteredBox';
import InputText from 'mui/InputText';
import SaveButton from 'mui/SaveButton';
import React from 'react';
import TaskSchema from './Task.schema';

type TaskFormProps = {
  initialValues?: Task,
  handleSubmit: (descripcion: string) => void,
}

const TaskForm: React.FC<TaskFormProps> = (props) => {
  const isEdit = !!props.initialValues;
  const initialValues: UpdateTaskDto = {
    description: props.initialValues?.description ?? '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: TaskSchema,
    onSubmit: ({ description }: UpdateTaskDto, { resetForm }) => {
      resetForm();
      props.handleSubmit(description);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <CenteredBox>
        <InputText
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        {!isEdit && <AddButton type="submit" data-testid="task-add-button" />}
        {isEdit && <SaveButton type="submit" />}
      </CenteredBox>
    </form>
  )
};

export default TaskForm;
