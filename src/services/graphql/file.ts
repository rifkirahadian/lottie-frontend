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