import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Form, redirect } from 'react-router-dom';

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel htmlFor="title">Task name:</FormLabel>
          <Input type="text" name="title" id="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel htmlFor="description">Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
            id="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox
            name="isPriority"
            id="isPriority"
            size="lg"
            colorScheme="purple"
          >
            <FormLabel htmlFor="isPriority" mb="0" ml="10px">
              Make this a priority task.
            </FormLabel>
          </Checkbox>
        </FormControl>

        <Button colorScheme="purple" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  };

  console.log(task);

  return redirect('/');
};
