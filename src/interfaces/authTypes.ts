interface UserType {
  id: number;
  email: string;
  information: {
    id: number;
    first_name: string;
    last_name: string;
    created_by: number | null;
    user_id: number;
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
}
