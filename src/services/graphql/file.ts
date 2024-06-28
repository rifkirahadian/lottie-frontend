import { gql } from '@apollo/client';

export const CREATE_FILE_MUTATION = gql`
  mutation CreateFile($createFileInput: CreateFileInput!) {
    createFile(createFileInput: $createFileInput) {
      size
      name
      file
    }
  }
`;

export const FIND_ALL_FILES_QUERY = gql`
  query {
    findAll {
      id
      name
      size
      createdAt
      updatedAt
    }
  }
`;