import styled from 'styled-components';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;



interface CreatePropertyFormData {
  image: string;
  galleryImages: string;
  price: string;
  pricePerWeek: string;
  beds: number;
  baths: number;
  receptions: number;
  description: string;
  listedDate: string;
  availableDate: string;
  agentName: string;
  category: string;
  status: string;
}

const CREATE_PROPERTY_MUTATION = gql`
  mutation CreateProperty(
    $image: String,
    $galleryImages: [String],
    $price: String,
    $pricePerWeek: String,
    $beds: Int,
    $baths: Int,
    $receptions: Int,
    $description: String,
    $listedDate: String,
    $availableDate: String,
    $agentName: String,
    $category: String,
    $status: String
  ) {
    createProperty(
      image: $image,
      galleryImages: $galleryImages,
      price: $price,
      pricePerWeek: $pricePerWeek,
      beds: $beds,
      baths: $baths,
      receptions: $receptions,
      description: $description,
      listedDate: $listedDate,
      availableDate: $availableDate,
      agentName: $agentName,
      category: $category,
      status: $status
    ) {
      id
      image
      galleryImages
      price
      pricePerWeek
      beds
      baths
      receptions
      description
      listedDate
      availableDate
      agentName
      category
      status
    }
  }
`;


const CreatePropertyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreatePropertyFormData>();
  const [createProperty] = useMutation(CREATE_PROPERTY_MUTATION);

  const onSubmit = (data: CreatePropertyFormData) => {
    createProperty({ variables: { ...data } })
      .then(response => {
        console.log('Property created:', response.data.createProperty);
        // handle success (e.g., navigate to another page or show success message)
      })
      .catch(error => {
        console.error('Error creating property:', error);
        // handle error (e.g., show error message)
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('image', { required: true })} placeholder="Image URL" />
      <Input {...register('galleryImages', { required: true })} placeholder="Gallery Images (comma-separated)" />
      <Input type="number" {...register('price', { required: true })} placeholder="Price" />
      <Input type="number" {...register('pricePerWeek', { required: true })} placeholder="Price Per Week" />
      <Input type="number" {...register('beds', { required: true })} placeholder="Beds" />
      <Input type="number" {...register('baths', { required: true })} placeholder="Baths" />
      <Input type="number" {...register('receptions', { required: true })} placeholder="Receptions" />
      <Textarea {...register('description', { required: true })} placeholder="Description" />
      <Input type="datetime-local" {...register('listedDate', { required: true })} placeholder="Listed Date" />
      <Input type="datetime-local" {...register('availableDate', { required: true })} placeholder="Available Date" />
      <Input {...register('agentName', { required: true })} placeholder="Agent Name" />
      <Input {...register('category', { required: true })} placeholder="Category" />
      <Input {...register('status', { required: true })} placeholder="Status" />
      <Button type="submit">Create Property</Button>
    </Form>
  );
};

export default CreatePropertyForm;


