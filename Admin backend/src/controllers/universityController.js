// Get all universities
export const getUniversities = async (req, res) => {
    try {
      const [universities] = await global.db.execute("SELECT * FROM university ORDER BY uni_id ASC");
      res.status(200).json(universities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching universities", error });
    }
  };
  
  
  // Create a new university
  export const createUniversity = async (req, res) => {
    const { uni_name, uni_Address, uni_contactnumber, uni_image } = req.body;
    try {
      await global.db.execute(
        "INSERT INTO university (uni_name, uni_Address, uni_contactnumber, uni_image) VALUES (?, ?, ?, ?)",
        [uni_name, uni_Address, uni_contactnumber, uni_image]
      );
      res.status(201).json({ message: "University added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error adding university", error });
    }
  };
  
  // Delete a university
  export const deleteUniversity = async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await global.db.execute("DELETE FROM university WHERE uni_id = ?", [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "University not found" });
      }
      res.status(200).json({ message: "University deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting university", error });
    }
  };
  