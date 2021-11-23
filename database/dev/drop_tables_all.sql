-- Clear all dev databases
DROP TABLE IF EXISTS tbl_webplatform_users CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_raw_ptxedl CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_raw_edicuesummary CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_projects CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_project_segments CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_characters CASCADE;
DROP TYPE IF EXISTS enum_dubbing_gender CASCADE;
DROP TYPE IF EXISTS enum_dubbing_project_type CASCADE;