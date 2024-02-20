export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      branches: {
        Row: {
          address: string | null
          branch_id: string
          created_at: string
          hospital_id: string | null
          name: string | null
          phone: string | null
        }
        Insert: {
          address?: string | null
          branch_id?: string
          created_at?: string
          hospital_id?: string | null
          name?: string | null
          phone?: string | null
        }
        Update: {
          address?: string | null
          branch_id?: string
          created_at?: string
          hospital_id?: string | null
          name?: string | null
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_branches_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospital"
            referencedColumns: ["hospital_id"]
          }
        ]
      }
      hospital: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          hospital_id: string
          logo: string | null
          name: string | null
          phone: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          hospital_id?: string
          logo?: string | null
          name?: string | null
          phone?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          hospital_id?: string
          logo?: string | null
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          branch_id: string | null
          created_at: string
          hospital_id: string | null
          id: number
          notification: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          branch_id?: string | null
          created_at?: string
          hospital_id?: string | null
          id?: number
          notification?: string | null
          updated_at: string
          user_id?: string | null
        }
        Update: {
          branch_id?: string | null
          created_at?: string
          hospital_id?: string | null
          id?: number
          notification?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_notifications_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["branch_id"]
          },
          {
            foreignKeyName: "public_notifications_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospital"
            referencedColumns: ["hospital_id"]
          },
          {
            foreignKeyName: "public_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      patients: {
        Row: {
          address: string | null
          branch_id: string | null
          created_at: string
          dob: string | null
          email: string | null
          first_name: string | null
          gender: Database["public"]["Enums"]["gender"] | null
          hospital_id: string | null
          last_name: string | null
          marital_status: Database["public"]["Enums"]["marital_status"] | null
          middle_name: string | null
          next_of_kin: Json | null
          occupation: string | null
          patient_id: string
          phone: string | null
          status: Database["public"]["Enums"]["patient_status"] | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          branch_id?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          hospital_id?: string | null
          last_name?: string | null
          marital_status?: Database["public"]["Enums"]["marital_status"] | null
          middle_name?: string | null
          next_of_kin?: Json | null
          occupation?: string | null
          patient_id?: string
          phone?: string | null
          status?: Database["public"]["Enums"]["patient_status"] | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          branch_id?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          hospital_id?: string | null
          last_name?: string | null
          marital_status?: Database["public"]["Enums"]["marital_status"] | null
          middle_name?: string | null
          next_of_kin?: Json | null
          occupation?: string | null
          patient_id?: string
          phone?: string | null
          status?: Database["public"]["Enums"]["patient_status"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_patients_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["branch_id"]
          },
          {
            foreignKeyName: "public_patients_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospital"
            referencedColumns: ["hospital_id"]
          },
          {
            foreignKeyName: "public_patients_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      roles: {
        Row: {
          created_at: string
          name: string | null
          role_id: string
        }
        Insert: {
          created_at?: string
          name?: string | null
          role_id?: string
        }
        Update: {
          created_at?: string
          name?: string | null
          role_id?: string
        }
        Relationships: []
      }
      user_branches: {
        Row: {
          branch_id: string
          branch_name: string | null
          created_at: string
          user_id: string
        }
        Insert: {
          branch_id: string
          branch_name?: string | null
          created_at?: string
          user_id?: string
        }
        Update: {
          branch_id?: string
          branch_name?: string | null
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_branches_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["branch_id"]
          },
          {
            foreignKeyName: "public_user_branches_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          role_id: string
          role_name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          role_id: string
          role_name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          role_id?: string
          role_name?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "public_user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      users: {
        Row: {
          active: boolean | null
          address: string | null
          created_at: string
          dob: string | null
          email: string | null
          first_name: string | null
          first_time_login: boolean | null
          gender: Database["public"]["Enums"]["gender"] | null
          hospital_id: string | null
          last_name: string | null
          middle_name: string | null
          next_of_kin: Json | null
          phone: string | null
          user_id: string
        }
        Insert: {
          active?: boolean | null
          address?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          first_time_login?: boolean | null
          gender?: Database["public"]["Enums"]["gender"] | null
          hospital_id?: string | null
          last_name?: string | null
          middle_name?: string | null
          next_of_kin?: Json | null
          phone?: string | null
          user_id?: string
        }
        Update: {
          active?: boolean | null
          address?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          first_time_login?: boolean | null
          gender?: Database["public"]["Enums"]["gender"] | null
          hospital_id?: string | null
          last_name?: string | null
          middle_name?: string | null
          next_of_kin?: Json | null
          phone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_users_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospital"
            referencedColumns: ["hospital_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "Male" | "Female"
      marital_status:
        | "Single"
        | "Married"
        | "Divorced"
        | "Widowed"
        | "Separated"
      patient_status:
        | "Admitted"
        | "Inpatient"
        | "Outpatient"
        | "Pre-Op"
        | "Post-Op"
        | "Emergency"
        | "Critical"
        | "Stable"
        | "Improving"
        | "Declining"
        | "Discharged"
        | "Deceased"
        | "Follow-up"
        | "Lost to Follow-up"
      role:
        | "Super AdministratorAdministrator"
        | "Doctor"
        | "Nurse"
        | "Pharmacist"
        | "Laboratory Technician"
        | "Receptionist"
        | "Billing and Finance"
        | "Human Resources"
        | "IT Support"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
