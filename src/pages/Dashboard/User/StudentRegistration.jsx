import { useState } from "react";
import api from "../../../hooks/useAxios";

const StudentRegistration = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: {
            firstName: "",
            middleName: "",
            lastName: "",
        },
        gender: "",
        dateOfBirth: "",
        email: "",
        password: "",
        contactNumber: "",
        bloodGroup: "",
        permanentAddress: "",
        presentAddress: "",
        isDeleted: false,
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes("name.")) {
            const nameField = name.split(".")[1]; // Extract firstName, middleName, or lastName
            setFormData((prev) => ({
                ...prev,
                name: {
                    ...prev.name,
                    [nameField]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted Form Data:", formData);
        try {
            // Add logic to submit data to the backend
            const res = await api.post('/users/create-student', formData)
            if (res.data) {
                console.log('user added to the database')
                alert('Student registration successfully')
            }

        } catch (error) {
            alert(error.response.data.message || "Failed to register student. Please try again.");
            console.error('Error creating student:', error);
        }

    };

    return (
        <section className="bg-white dark:bg-gray-900 h-full">
            <div className="w-full p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 mx-auto">
                <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-12 gap-6">
                    {/* Name Fields */}
                    <div className="form-control col-span-12 sm:col-span-4">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            name="name.firstName"
                            placeholder="First Name"
                            value={formData.name.firstName}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control col-span-12 sm:col-span-4">
                        <label className="label">
                            <span className="label-text">Middle Name</span>
                        </label>
                        <input
                            type="text"
                            name="name.middleName"
                            placeholder="Middle Name"
                            value={formData.name.middleName}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                        />
                    </div>
                    <div className="form-control col-span-12 sm:col-span-4">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            name="name.lastName"
                            placeholder="Last Name"
                            value={formData.name.lastName}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control col-span-12 sm:col-span-6">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control col-span-12 sm:col-span-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password (optional)"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                        />
                    </div>

                    {/* Gender */}
                    <div className="form-control col-span-12 sm:col-span-6">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="select select-bordered w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Date of Birth */}
                    <div className="form-control col-span-12 sm:col-span-6">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="form-control col-span-12 sm:col-span-6">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>

                    {/* Blood Group */}
                    <div className="form-control col-span-12 sm:col-span-6">
                        <label className="label">
                            <span className="label-text">Blood Group</span>
                        </label>
                        <select
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                            className="select select-bordered w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        >
                            <option value="" disabled>Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    {/* Permanent Address */}
                    <div className="form-control col-span-12">
                        <label className="label">
                            <span className="label-text">Permanent Address</span>
                        </label>
                        <input
                            type="text"
                            name="permanentAddress"
                            placeholder="Permanent Address"
                            value={formData.permanentAddress}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>

                    {/* Present Address */}
                    <div className="form-control col-span-12">
                        <label className="label">
                            <span className="label-text">Present Address</span>
                        </label>
                        <input
                            type="text"
                            name="presentAddress"
                            placeholder="Present Address"
                            value={formData.presentAddress}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-4 input input-bordered"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-12">
                        <button
                            type="submit"
                            className="form-control btn btn-primary btn-outline text-lg"
                        >
                            Create a new student profile
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default StudentRegistration;