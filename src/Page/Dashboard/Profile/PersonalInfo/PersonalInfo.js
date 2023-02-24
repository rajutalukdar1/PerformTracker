import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import EmployeeProfileInfo from "../EmployeeProfileInfo";
import EditBankInformation from "./EditBankInformation";
import EditContact from "./EditContact";
import EditEducationInfo from "./EditEducationInfo";
import EditExperience from "./EditExperience";
import EditPersonalInfo from "./EditPersonalInfo";

const PersonalInfo = () => {
  const [editingInfo, setEditingInfo] = useState(null);
  const [editingContact, setEditingContact] = useState(null);
  const [editingBankInfo, setEditingBankInformation] = useState(null);
  const [editingEduInfo, setEditingEduInfo] = useState(null);
  const [editingExperience, setEditingExperience] = useState(null);

  const { user } = useSelector((state) => state.userReducer);

  const { data: employees = [], refetch } = useQuery({
    queryKey: ["employees", user?.email],
    queryFn: () =>
      fetch(
        `https://perform-tracker-server.vercel.app/employee?email=${user?.email}`
      ).then((res) => res.json()),
  });

  const { nationality, phone, marital_status, passport_no, religion, tel, bank_account_no, bank_name, employment_of_spouse, experience_1, experience_1_join, experience_3, experience_3_join, no_of_children, pg, pg_year, primary, primary_relationship, primary_phone, secondary_phone, secondary_relationship, secondary, ug, ug_year, experience_2, experience_2_join } = employees;

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-6">
      <div className="w-full max-h-128 bg-[#16191C] text-white p-5 rounded-md">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold mb-4">Personal Information's</p>
          </div>
          <div className="">
            <label
              onClick={() => setEditingInfo(employees)}
              htmlFor="editPersonalInfoModal"
            >
              <FaEdit className="cursor-pointer"></FaEdit>
            </label>
          </div>
        </div>
        <div
          className="grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]"
        >
          <EmployeeProfileInfo
            lab="Passport No."
            val={passport_no}
          />
          <EmployeeProfileInfo lab="Tel" val={tel} />
          <EmployeeProfileInfo
            lab="Nationality"
            val={nationality}
          />
          <EmployeeProfileInfo
            lab="Religion"
            val={religion}
          />
          <EmployeeProfileInfo
            lab="Marital status"
            val={marital_status}
          />
          <EmployeeProfileInfo
            lab="Employment of spouse"
            val={employment_of_spouse}
          />
          <EmployeeProfileInfo
            lab="No. of children"
            val={no_of_children}
          />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="w-full bg-[#16191C] text-white p-5 rounded-md">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold mb-4">Emergency Contact</p>
          </div>
          <div className="">
            <label
              onClick={() => setEditingContact(employees)}
              htmlFor="editContactModal"
            >
              <FaEdit className="cursor-pointer"></FaEdit>
            </label>
          </div>
        </div>
        <div
          className="grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]"
        >
          <EmployeeProfileInfo
            lab="Primary"
            val={primary}
          />
          <EmployeeProfileInfo
            lab="Relationship"
            val={primary_relationship}
          />
          <EmployeeProfileInfo
            lab="Phone"
            val={primary_phone}
          />
        </div>
        <hr className="w-full mt-2 mb-2" />
        <div
          className="grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]"
        >
          <EmployeeProfileInfo
            lab="Secondary"
            val={secondary}
          />
          <EmployeeProfileInfo
            lab="Relationship"
            val={secondary_relationship}
          />
          <EmployeeProfileInfo
            lab="Phone"
            val={secondary_phone}
          />
        </div>
      </div>

      <div className="w-full bg-[#16191C] text-white p-5 rounded-md">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold mb-4">Bank Information</p>
          </div>
          <div className="">
            <label
              onClick={() => setEditingBankInformation(employees)}
              htmlFor="editBankInfoModal"
            >
              <FaEdit className="cursor-pointer"></FaEdit>
            </label>
          </div>
        </div>
        <div
          className="grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]"
        >
          <EmployeeProfileInfo
            lab="Bank name"
            val={bank_name}
          />
          <EmployeeProfileInfo
            lab="Bank account No."
            val={bank_account_no}
          />
          <EmployeeProfileInfo
            lab="Phone"
            val={phone}
          />
        </div>

        <div
          className="grid text-[#BBC4CC] lg:grid-cols-[20rem_1fr] 
                md:grid-cols-[16rem_1fr] grid-cols-[8rem_1fr]"
        >
          <EmployeeProfileInfo lab="Secondary" val={secondary} />
          <EmployeeProfileInfo lab="Relationship" val={secondary_relationship} />
          <EmployeeProfileInfo lab="Phone" val={secondary_phone} />
        </div>
      </div>

      {/* Education information's */}
      <div className="w-full bg-[#16191C] text-white p-5 rounded-md">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold mb-4">
              Education information's
            </p>
          </div>
          <div className="">
            <label
              onClick={() => setEditingEduInfo(employees)}
              htmlFor="editEduInfoModal"
            >
              <FaEdit className="cursor-pointer"></FaEdit>
            </label>
          </div>
        </div>
        <div className="text-[#BBC4CC]">
          <div>
            <p className="text-[#616156] font-bold">
              {ug}
            </p>
            <p>Bsc Computer Science</p>
            <p className="text-xs">{ug_year}</p>
          </div>
          <div className="mt-4">
            <p className="text-[#616156] font-bold">
              {pg}
            </p>
            <p>Msc Computer Science</p>
            <p className="text-xs">{pg_year}</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="w-full bg-[#16191C] text-white p-5 rounded-md">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold mb-4">Experience</p>
          </div>
          <div className="">
            <label
              onClick={() => setEditingExperience(employees)}
              htmlFor="editExperienceModal"
            >
              <FaEdit className="cursor-pointer"></FaEdit>
            </label>
          </div>
        </div>
        <div className="text-[#BBC4CC]">
          <div>
            <p className="text-[#616156] font-bold">
              {experience_1}
            </p>
            <p className="text-xs">{experience_1_join}</p>
          </div>
          <div className="mt-4">
            <p className="text-[#616156] font-bold">
              {experience_2}
            </p>
            <p className="text-xs">{experience_2_join}</p>
          </div>
          <div className="mt-4">
            <p className="text-[#616156] font-bold">
              {experience_3}
            </p>
            <p className="text-xs">{experience_3_join}</p>
          </div>
        </div>
      </div>
      {editingInfo && (
        <EditPersonalInfo
          refetch={refetch}
          employees={editingInfo}
          setEditingInfo={setEditingInfo}
        ></EditPersonalInfo>
      )}

      {editingContact && (
        <EditContact
          refetch={refetch}
          employees={editingContact}
          setEditingContact={setEditingContact}
        ></EditContact>
      )}

      {editingBankInfo && (
        <EditBankInformation
          refetch={refetch}
          employees={editingBankInfo}
          setEditingBankInformation={setEditingBankInformation}
        ></EditBankInformation>
      )}

      {editingEduInfo && (
        <EditEducationInfo
          refetch={refetch}
          employees={editingEduInfo}
          setEditingEduInfo={setEditingEduInfo}
        ></EditEducationInfo>
      )}

      {editingExperience && (
        <EditExperience
          refetch={refetch}
          employees={editingExperience}
          setEditingExperience={setEditingExperience}
        ></EditExperience>
      )}
    </div>
  );
};

export default PersonalInfo;
