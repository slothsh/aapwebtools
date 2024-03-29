-- Drop all dubbing tables
DROP TABLE IF EXISTS tbl_webplatform_users CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_raw_ptxedl CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_raw_edicuesummary CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_projects CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_project_segments CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_characters CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_cues CASCADE;
DROP TABLE IF EXISTS tbl_dubbing_cues_monolithic CASCADE;
DROP TYPE IF EXISTS enum_dubbing_gender CASCADE;
DROP TYPE IF EXISTS enum_dubbing_project_type CASCADE;